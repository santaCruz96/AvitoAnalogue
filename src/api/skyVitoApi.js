import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const skyVitoApi = createApi({
    reducerPath: 'skyVitoApi',
    tagTypes: [['Products'], ['Comments'], ['User']], 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8090/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.accessToken
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: ({ ...body }) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User']
        }),
        getRefreshToken: build.mutation({
            query: ({ ...body }) => ({
                url: '/auth/login',
                method: 'PUT',
                body
            })
        }),
        userSignUp: build.mutation({
            query: ({ ...body }) => ({
                url: '/auth/register',
                method: 'POST',
                body,
            })
        }),
        getUser: build.query({
            query: () => ({
                url: '/user'
            }),
            providesTags: ['User']
        }),
        getAllUsers: build.query({
            query: () => ({
                url: '/user/all'
            })
        }),
        getMyProducts: build.query({
            query: () => ({
                url: '/ads/me'
            }),
            providesTags: ['User']
        }),
        changeUserData: build.mutation({
            query: ({ ...body }) => ({
                url: '/user',
                method: 'PATCH',
                body
            })
        }),
        getAllProducts: build.query({
            query: () => ({
                url: '/ads',
            }),
            providesTags: ['Products'],
        }),
        getProductById: build.query({
            query: (id) => ({
                url: `/ads/${id}`
            })
        }),
        getCommentsById: build.query({
            query: (id) => ({
                url: `/ads/${id}/comments`
            }),
            providesTags: ['Comments']
        }),
        addComment: build.mutation({
            query: ({ id, ...body }) => ({
                url: `/ads/${id}/comments`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Comments']
        }),
        addNewProductWithoutImg: build.mutation({
            query: ({ ...body }) => ({
                url: '/adstext',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/ads/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        })
    })
})

export const {
    useUserLoginMutation,
    useGetRefreshTokenMutation,
    useUserSignUpMutation,
    useGetUserQuery,
    useGetAllUsersQuery,
    useGetMyProductsQuery,
    useChangeUserDataMutation,
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetCommentsByIdQuery,
    useAddCommentMutation,
    useAddNewProductWithoutImgMutation,
    useDeleteProductMutation
} = skyVitoApi