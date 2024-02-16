import { errorMan } from '../daos/utils/errorMan';

export async function validateProductData(req, res, next) {
    try {
        const {
            title, description,
            price, code, status, stock,  category,
        } = req.body;


        const errors = [];
        if (!title || title.length === 0) {
            errors.push("El título es requerido.");
        }
        if (!description || description.length === 0) {
            errors.push("La descripción es requerida.");
        }
        if (!price || price.length === 0) {
            errors.push("El precio es requerido.");
        }
        if (!code || code.length === 0) {
            errors.push("El código es requerido.");
        }
        if (status === undefined) {
            errors.push("El estado es requerido.");
        }
        if (!stock || stock.length === 0) {
            errors.push("El stock es requerido.");
        }
        if (!category || category.length === 0) {
            errors.push("La categoría es requerida.");
        }

        if (errors.length > 0) {
            const typedError = new Error(
                "Validation failed. Libro data is invalid."
            );
            typedError.code = errorMan.INCORRECT_DATA;
            typedError.errors = errors;
            throw typedError;
        }

        next();
    } catch (error) {
        next(error);
    }
}

export async function validateId(req, res, next) {
    try {
        const { id } = req.params;

        if (!id) {
            const error = new Error("Falta el parámetro 'id'");
            error.code = errorMan.INCORRECT_DATA;
            throw error;
        }

        next();
    } catch (error) {
        next(error);
    }
}

export async function validateUpdates(req, res, next) {
    try {
        const updates = req.body;
        console.log("valid updates", updates);
        if (Object.keys(updates).length === 0) {
            const error = new Error("No se recibieron datos para actualizar");
            error.code = errorMan.INCORRECT_DATA;
            throw error;
        }

        next();
    } catch (error) {
        next(error);
    }
}
