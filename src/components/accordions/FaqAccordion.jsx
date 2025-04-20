import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = ({ question, answer }) => {
    return (
        <Accordion disableGutters elevation={1}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default FaqAccordion;
