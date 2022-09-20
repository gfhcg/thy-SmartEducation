import React, { useCallback, useState } from 'react';
import html2Canvas, { Options } from 'html2canvas';

type UseHtml2Canvas = (domId: string, isDownLoad: boolean, options?: Partial<Options>) => [string, () => void];

const defaultOptions = {
  useCORS: true,
  scale: devicePixelRatio,
  width: window.innerWidth,
  height: window.innerHeight,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight
};

/**
 * @description 使用html2canvas截图元素，可选择是否下载图片
 * @param domId dom元素的id
 * @param isDownLoad 是否下载照片
 * @param options 选项
 * @returns [图片的data-URL, 保存图片的回调]
 */
const useHtml2Canvas: UseHtml2Canvas = (domId, isDownLoad, options = defaultOptions) => {
  const [imgUrl, setImgUrl] = useState('#');

  const saveImg = useCallback(() => {
    html2Canvas(document.getElementById(domId) as HTMLElement, options).then((canvas) => {
      setImgUrl(canvas.toDataURL('image/jpeg'));

      if (isDownLoad) {
        /** @description 下载图片 */
        let aLink = document.createElement('a');
        aLink.download = 'picture.jpeg';
        aLink.href = canvas.toDataURL('image/jpeg');
        aLink.click();
      }
    });
  }, []);

  return [imgUrl, saveImg];
};

export default useHtml2Canvas;
