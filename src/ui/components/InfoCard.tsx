import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { FC } from "react"
import { NavLink } from "react-router-dom"

interface Props {
    title: string,
    imageUrl?: string,
    children: React.ReactNode,
    url: string
}

export const InfoCard: FC<Props> = ({ title, imageUrl, children, url }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ display: 'flex' }}>
            <Card variant="outlined" sx={{ width: '100%' }}>
                {imageUrl ? (
                    <CardMedia
                        component="img"
                        width={200}
                        height={200}
                        image={imageUrl}
                        alt={`${title} image`}
                    />
                ) : null}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    {children}
                </CardContent>
                <CardActions>
                    <NavLink to={url}>
                        <Button size="small">Read more</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    )
}
