export interface GeneralResponseEntity<T> {
  message: string;
  statusCode: number;
  data: T;
}
