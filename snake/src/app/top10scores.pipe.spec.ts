import { Top10scores } from './top10scores.pipe';

describe('Top10scores', () => {
  it('create an instance', () => {
    const pipe = new Top10scores();
    expect(pipe).toBeTruthy();
  });
});
