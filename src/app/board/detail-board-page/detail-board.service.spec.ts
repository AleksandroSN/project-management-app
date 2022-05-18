import { TestBed } from "@angular/core/testing";

import { DetailBoardService } from "./detail-board.service";

describe("DetailBoardService", () => {
  let service: DetailBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailBoardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
