export const getQueryString = (queryParamsObj: object | null) => {
  if (!queryParamsObj) return '';

  const queryParams: string[] = [];
  for (const [key, value] of Object.entries(queryParamsObj)) {
    // Bỏ qua các giá trị là chuỗi rỗng hoặc số bằng 0
    if (value !== null && value !== undefined && value !== '' && value !== 0) {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }

  return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
};