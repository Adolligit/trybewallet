export default async function coins() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    return response.json();
  } catch (error) {
    return `erro na  requisição da api: ${error}`;
  }
}

export async function noUSDT() {
  const jsonData = await coins();
  delete jsonData.USDT;
  return jsonData;
}
