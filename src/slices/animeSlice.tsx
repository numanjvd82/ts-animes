import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

const baseUrl = 'https://kitsu.io/api/edge/anime';

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
    youtubeVideoId: string;
  };
};

type AnimeState = {
  animes: Anime[];
  loading: 'idle' | 'pending' | 'success' | 'failed';
  error: null;
};

type PayloadActionType = PayloadAction<
  Anime[],
  string,
  {
    arg?: number;
    requestId: string;
    requestStatus: 'fulfilled';
  }
>;

const initialState: AnimeState = {
  animes: [],
  loading: 'idle',
  error: null,
};

export const fetchAnimes = createAsyncThunk(
  'animes/fetchAll',
  async (offset: number = 0): Promise<Anime[]> => {
    try {
      const response = await fetch(
        `${baseUrl}?page[limit]=10&page[offset]=${offset}`
      );
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
          youtubeVideoId: anime.attributes.youtubeVideoId,
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
      (state, action: PayloadActionType) => {
        state.loading = 'success';
        if (action.meta.arg === 0) {
          state.animes = action.payload;
        }

        if (action.meta.arg! > 0) {
          state.animes = state.animes.concat(action.payload);
        }
      }
    );
    builder.addCase(fetchAnimes.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const selectAnimes = (state: RootState) => state.animes;

export default animeSlice.reducer;
