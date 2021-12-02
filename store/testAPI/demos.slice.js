import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_demo_list = createAsyncThunk(
  "demos/api_v1_demo_list",
  async payload => {
    const response = await apiService.api_v1_demo_list(payload)
    return response.data
  }
)
export const api_v1_demo_create = createAsyncThunk(
  "demos/api_v1_demo_create",
  async payload => {
    const response = await apiService.api_v1_demo_create(payload)
    return response.data
  }
)
export const api_v1_demo_read = createAsyncThunk(
  "demos/api_v1_demo_read",
  async payload => {
    const response = await apiService.api_v1_demo_read(payload)
    return response.data
  }
)
export const api_v1_demo_update = createAsyncThunk(
  "demos/api_v1_demo_update",
  async payload => {
    const response = await apiService.api_v1_demo_update(payload)
    return response.data
  }
)
export const api_v1_demo_partial_update = createAsyncThunk(
  "demos/api_v1_demo_partial_update",
  async payload => {
    const response = await apiService.api_v1_demo_partial_update(payload)
    return response.data
  }
)
export const api_v1_demo_delete = createAsyncThunk(
  "demos/api_v1_demo_delete",
  async payload => {
    const response = await apiService.api_v1_demo_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const demosSlice = createSlice({
  name: "demos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_demo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_demo_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_demo_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_demo_list,
  api_v1_demo_create,
  api_v1_demo_read,
  api_v1_demo_update,
  api_v1_demo_partial_update,
  api_v1_demo_delete,
  slice: demosSlice
}
