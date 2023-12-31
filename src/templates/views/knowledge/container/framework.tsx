/* --- Importacion de LIBRERIAS --- */

import * as React from 'react';

import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Paper,
    Avatar,
    Typography,
    Slide
} from '@mui/material';

/* --- Importacion de ICONOS --- */

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material';


/* --- Importacion de ARCHIVOS --- */

import flaskLogo from '../../../public/images/knowledge/framework/flask.png';
import laravelLogo from '../../../public/images/knowledge/framework/laravel.png';
import bootstrapLogo from '../../../public/images/knowledge/framework/bootstrap.png';



/* --- Gestion de los nombres y enlaces de framework --- */

const frameworks = [
    {
        name: 'Flask',
        link: flaskLogo
    },
    {
        name: 'Laravel',
        link: laravelLogo
    },
    {
        name: 'Bootstrap',
        link: bootstrapLogo
    }
];

export default function Framework() {

    // Cambia a false para ocultar la lista
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Slide in={true} direction='up' style={{ transitionDelay: '600ms' }}>
            <Paper elevation={6}>
                <List
                    sx={{ margin: 2 }}
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={<Typography variant='h5' gutterBottom>
                            Frameworks
                        </Typography>} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>

                            {frameworks.map((framework, index) => (
                                <ListItemButton sx={{ pl: 4 }} key={index}>
                                    <ListItemIcon>
                                        <Avatar src={framework.link} />
                                    </ListItemIcon>
                                    <ListItemText primary={framework.name} />
                                </ListItemButton>
                            ))}

                        </List>
                    </Collapse>
                </List>
            </Paper>
        </Slide>
    );
}