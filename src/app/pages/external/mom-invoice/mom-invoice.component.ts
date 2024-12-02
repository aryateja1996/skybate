import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import { concatMap, timer } from 'rxjs';
import { LoaderService } from '../../../components/loading/loader.service';

@Component({
  selector: 'app-mom-invoice',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './mom-invoice.component.html',
  styleUrl: './mom-invoice.component.css'
})
export class MomInvoiceComponent {
  selectedDate: string | null = null;
  invoiceForm: FormGroup;
  hidden:boolean=false;
todayFormatted:any;
  constructor(private fb: FormBuilder,private datePipe: DatePipe,private loaderService: LoaderService) {
    const today = new Date();
    this.todayFormatted = this.datePipe.transform(today, 'dd/MM/yy') || '';
    this.invoiceForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  ngOnInit() {
    
  }
  formatDate(date: string): string {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`; // Format as DD-MM-YYYY
  }
  
  get items() {
    return this.invoiceForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      menu: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      total: [{ value: 0, disabled: true }]
    });
  }

  addItem() {
    console.log("Add item");
    
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  calculateTotal(index: number) {
    const item = this.items.at(index);
    const price = item?.get('price')?.value || 0;
    const qty = item?.get('qty')?.value || 0;
    const total = price * qty;
    item?.get('total')?.setValue(total);
  }

  getTotal(): number {
    return this.items.controls.reduce((acc, item) => {
      const total = item.get('total')?.value || 0;
      return acc + total;
    }, 0);
  }

  onSubmit() {
    this.hidden = true;
    console.log(this.invoiceForm.value);
    this.loaderService.show();
    if (this.hidden) {
      
      timer(3000)
      .pipe()
      .subscribe(()=>{this.loaderService.hide();this.downloadPdf()});
    }
  
    
  }
  downloadPdf(){
    const data = document.getElementById('pdf') as HTMLElement;
    console.log(data);
    
    if (data) {
      html2canvas(data).then(canvas => {
        // canvas.outerHTML()
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size PDF
    
        // Set A4 dimensions in pixels for full-page scaling
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = 297; // A4 height in mm
          // Use `addImage` to stretch the canvas to fill the entire page
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight,);
        // pdf.html(data,{
          
        // })
        const now = new Date();
        const date = now.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format: DD-MM-YYYY
        const time = now.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, '-'); // Format: HH-MM-SS
    
        const filename = `invoice-${date}-${time}.pdf`; 
        pdf.save(filename); // Save the PDF
      }).catch(error => {
        console.error("Error generating PDF:", error);
      });
    }
  }
}
