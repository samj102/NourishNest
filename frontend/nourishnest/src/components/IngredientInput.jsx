import {Box, TextField, IconButton, InputAdornment} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const IngredientInput = ({ ingredient, onIngredientChange, onQuantityChange, onDelete }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
            <TextField
                label="Quantity"
                variant="outlined"
                value={ingredient.quantity}
                onChange={(e) => onQuantityChange(e.target.value)}
            />
            <TextField
                label="Ingredient"
                variant="outlined"
                value={ingredient.ingredient}
                onChange={(e) => onIngredientChange(e.target.value)}
            />

            <IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </Box>
    );
};

export default IngredientInput;
