import { errorMan } from '../daos/utils/errorMan';
//hashPass
export function hashPassword(req, res, next) {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }
    const saltRounds = 10; // salt rounds for bcrypt
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return next(err);
        }
        req.hashedPassword = hashedPassword; // guarda hashed pass in the request object
        next(); // Next midd
    });
}
//validadetePremium
export async function validatePremiumUser(req, res, next) {
    try {
        // Assuming you have a property in req.user indicating the user's role
        const userRole = req.user.role;

        if (userRole !== 'premium') {
            return res.status(403).json({ error: 'Unauthorized: Only premium users can access this functionality' });
        }

        next();
    } catch (error) {
        next(error);
    }
}



export async function validateLibroData(req, res, next) {
    try {
        const {
            title, description,
            price, code, status, stock, category,
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
