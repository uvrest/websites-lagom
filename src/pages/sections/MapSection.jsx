import { Box } from "@mui/material";

const MapSection = () => {
    return (
        <Box p={0} m={0}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227450.54524014212!2d-48.671272362304684!3d-27.032859020462652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8af754d3ca8d7%3A0xc8253a74bbb28989!2sLagom%20Engenharia%20e%20Meio%20Ambiente!5e0!3m2!1spt-BR!2sbr!4v1746816496452!5m2!1spt-BR!2sbr"
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