import { AfterContentInit, Directive, ElementRef, OnDestroy, Renderer2 } from "@angular/core";
import { selectUserAuth } from "@app/redux";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";

@Directive({
  selector: "[appStickyHeader]",
})
export class StickyHeaderDirective implements AfterContentInit, OnDestroy {
  destroy$ = new Subject<boolean>();

  isAuth$: Observable<boolean>;

  constructor(private store: Store, private el: ElementRef<HTMLElement>, private rerender: Renderer2) {
    this.isAuth$ = this.store.select(selectUserAuth);
  }

  ngAfterContentInit(): void {
    this.addStickyHeader();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addStickyHeader() {
    this.isAuth$.pipe(takeUntil(this.destroy$)).subscribe((userAuth) => {
      if (userAuth) {
        this.rerender.addClass(this.el.nativeElement, "position-sticky");
      }
    });
  }
}
