import { BusyCardModule } from './busy-card.module';

describe('BusyCardModule', () => {
  let busyCardModule: BusyCardModule;

  beforeEach(() => {
    busyCardModule = new BusyCardModule();
  });

  it('should create an instance', () => {
    expect(busyCardModule).toBeTruthy();
  });
});
