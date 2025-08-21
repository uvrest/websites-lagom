import { Box } from "@mui/material";

const MapSection = () => {
    return (
        <Box p={0} m={0}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4290.045116037991!2d-48.64879670555725!3d-27.023461899999962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b59b5fac9cb1%3A0xd46eb355c400251a!2sConfiance%20Consultoria!5e1!3m2!1spt-BR!2sbr!4v1755776670456!5m2!1spt-BR!2sbr"
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