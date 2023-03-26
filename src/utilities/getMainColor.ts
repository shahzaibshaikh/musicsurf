import { FastAverageColor } from 'fast-average-color';

const getMainColor = async (url: string): Promise<string> => {
  const fac = new FastAverageColor();
  try {
    const color = await fac.getColorAsync(url);
    const averageColor = color.rgba.toString();
    return averageColor;
  } catch (e: any) {
    console.log(e);
    return e;
  }
};

export default getMainColor;
