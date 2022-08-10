import { FC } from 'react'
import { Grid, Skeleton } from '@mui/material'

interface Props {
    list: any[]
}

export const SkeletonList: FC<Props> = ({ list }) => {
    return (
        <Grid container spacing={2}>
            {
                list.map((el) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={el.id}>
                        <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginTop: '3rem' }} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
