import { OrderByIDPipe } from '../order-by-id.pipe';

describe('OrderByIDPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByIDPipe();
    expect(pipe).toBeTruthy();
  });
});
