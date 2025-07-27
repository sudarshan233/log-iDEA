export const signup = (req, res) => {
    try {
        res.status(200).send({
            message: "Signup successful"
        })
    } catch (error) {
        res.status(500).send({
            message: "Signup unsuccessful"
        })
        console.error(error);
    }
}

export const login = (req, res) => {
    try {
        res.status(200).send({
            message: "Login successful"
        })
    } catch (error) {
        res.status(500).send({
            message: "Login unsuccessful"
        })
        console.error(error);
    }
}

export const logout = (req, res) => {
    try {
        res.status(200).send({
            message: "Logout successful"
        })
    } catch (error) {
        res.status(500).send({
            message: "Logout unsuccessful"
        })
    }
}