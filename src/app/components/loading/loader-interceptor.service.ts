import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    
    // Show the loader when the request starts
    this.loaderService.show();

    return next.handle(req).pipe(
      // Hide the loader after the request completes, either successfully or with an error
      finalize(() => this.loaderService.hide())
    );
  }
 
}
// export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{
//       // Show the loader when the request starts
//       this.loaderService.show();
  
//       return next.handle(req).pipe(
//         // Hide the loader after the request completes, either successfully or with an error
//         finalize(() => this.loaderService.hide())
//       );
//     }