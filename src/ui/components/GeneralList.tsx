import { ChangeEvent, FC } from 'react'
import { Box, Grid, Pagination } from '@mui/material'
import { useDispatch } from 'react-redux'

interface Props {
    children: React.ReactNode,
    page: number,
    totalPages: number,
    setPage: any,
    getList: any,
    query?: string
}

export const GeneralList: FC<Props> = ({ children, page, query = '', totalPages, setPage, getList }) => {
    const dispatch = useDispatch()

    const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
        if (query.length !== 0) dispatch(getList(p, query) as any)
        else dispatch(getList(p) as any)
        dispatch(setPage(p))
    }

    return (
        <>
            {
                (totalPages > 1) ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination page={page} count={totalPages} color="secondary" sx={{ margin: '1rem' }} onChange={handlePagination} />
                    </Box>
                ) : null
            }
            <Grid container spacing={2} alignItems="stretch">
                {children}
            </Grid>
            {
                (totalPages > 1) ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination page={page} count={totalPages} color="secondary" sx={{ margin: '1rem' }} onChange={handlePagination} />
                    </Box>
                ) : null
            }
        </>
    )
}
