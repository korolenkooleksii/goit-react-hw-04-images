import { useState, useEffect } from 'react';

import { getImages } from 'Api/images-api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImagesWithQuery = async () => {
      setIsLoading(true);
      setDisabled(false);
      try {
        const { hits, totalHits } = await getImages(page, query);

        if (!hits.length) {
          toast.info('There are no images for your request.');
          setIsLoading(false);
          return;
        }

        setImages(images => [...images, ...hits]);
        setDisabled(page < Math.ceil(totalHits / 12));
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Image loading error. Restart the application.`
        );
        setIsLoading(false);
      }
    };

    fetchImagesWithQuery();
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const updatePage = () => {
    setPage(page => page + 1);
  };

  return {
    query,
    images,
    page,
    disabled,
    isLoading,
    handleFormSubmit,
    updatePage,
  };
};
