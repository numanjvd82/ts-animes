import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Anime = {
  id: string;
  attributes: {
    slug: string;
    synopsis: string;
    titles: {
      en: string;
      ja_jp: string;
    };
    status: string;
    posterImage: {
      large: string;
    };
    averageRating: string;
  };
};

type AnimeState = {
  animes: Anime[];
  loading: 'idle' | 'pending' | 'success' | 'failed';
  error: null;
};

const initialState: AnimeState = {
  animes: [],
  loading: 'idle',
  error: null,
};

export const fetchAnimes = createAsyncThunk<Anime[]>(
  'animes/fetchAll',
  async (): Promise<Anime[]> => {
    try {
      const response = await fetch('https://kitsu.io/api/edge/anime');
      const data = await response.json();
      const customData: Anime[] = data.data.map((anime: Anime) => {
        return {
          id: anime.id,
          attributes: {
            slug: anime.attributes.slug,
            synopsis: anime.attributes.synopsis,
            titles: {
              en: anime.attributes.titles.en,
              ja_jp: anime.attributes.titles.ja_jp,
            },
            status: anime.attributes.status,
            posterImage: {
              large: anime.attributes.posterImage.large,
            },
            averageRating: anime.attributes.averageRating,
          },
        };
      });
      return customData;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
);

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimes.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(
      fetchAnimes.fulfilled,
      (state, action: PayloadAction<Anime[]>) => {
        state.loading = 'success';
        state.animes = action.payload;
      }
    );
    builder.addCase(fetchAnimes.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const selectAnimes = (state: RootState) => state.animes;

export default animeSlice.reducer;
