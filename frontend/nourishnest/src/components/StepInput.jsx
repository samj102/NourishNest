import {Box, TextField, IconButton, Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StepInput = ({ step, onStepChange, onNameChange, onDelete }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 5 }}>
            <Stack width={'30em'} spacing={2}>
                <TextField
                    label="Step Name"
                    variant="outlined"
                    value={step.name}
                    onChange={onNameChange}
                    sx={{ flexGrow: 1 }}
                />
                <TextField
                    label="Step Description"
                    variant="outlined"
                    multiline
                    rows={2}
                    value={step.step}
                    onChange={onStepChange}
                    sx={{ flexGrow: 2 }}
                />
            </Stack>
            <IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export default StepInput;
