import { Box } from "@mui/material";

const MapSection = () => {
    return (
        <Box p={0} m={0}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6908.623140568789!2d-51.21877!3d-30.027918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a62a887ec5%3A0xc240fbad893524f3!2sAv.%20Alberto%20Bins%2C%20806%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090030-141!5e0!3m2!1spt-BR!2sbr!4v1745181368885!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
    )
}

export default MapSection;