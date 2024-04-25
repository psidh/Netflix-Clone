const makeFav = async (movieId: any) => {
  try {
    const response = await fetch(`/api/favourite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: movieId }),
    });

    if (response.status === 409) {
      console.log('executed');
    }

    if (response.ok) {
      return;
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};

export default makeFav