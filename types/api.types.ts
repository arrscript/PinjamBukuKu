interface ApiResponse {
  success: boolean;
  error?: string;
  data?: any;
  [key: string]: any;
}
