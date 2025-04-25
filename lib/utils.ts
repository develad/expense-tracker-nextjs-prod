export function addCommas(x: number): string {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
