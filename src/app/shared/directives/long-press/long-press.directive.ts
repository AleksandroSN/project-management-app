import {
 Directive, ElementRef, EventEmitter, OnDestroy, Output 
} from "@angular/core";
import {
 filter, fromEvent, map, merge, of, Subscription, switchMap, timer 
} from "rxjs";

@Directive({
  selector: "[appLongPress]",
})
export class LongPressDirective implements OnDestroy {
  private readonly eventSubscribe: Subscription;

  threshold = 500;

  @Output() longPress = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const mousedown = fromEvent<MouseEvent>(elementRef.nativeElement, "mousedown").pipe(
      filter((event) => event.button === 0),
      map(() => true),
    );
    const touchstart = fromEvent(elementRef.nativeElement, "touchstart").pipe(map(() => true));
    const touchEnd = fromEvent(elementRef.nativeElement, "touchend").pipe(map(() => false));
    const mouseup = fromEvent<MouseEvent>(window, "mouseup").pipe(
      filter((event) => event.button === 0),
      map(() => false),
    );
    this.eventSubscribe = merge(mousedown, mouseup, touchstart, touchEnd)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 100) : of(null))),
        // @ts-ignore
        filter((value) => value),
      )
      .subscribe(() => this.longPress.emit());
  }

  ngOnDestroy(): void {
    if (this.eventSubscribe) {
      this.eventSubscribe.unsubscribe();
    }
  }
}
