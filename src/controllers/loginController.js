import jwt from 'jsonwebtoken';
import { Company } from "../models/Company.Model.js";
import { comparePassword, generateToken, validateFields } from "../utils/auth.js";

export const loginCompany = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!validateFields([email, password])) {
            return res.status(400).json({ message: 'All fields are required' });
        }

    // ver se ela existe
        const company = await Company.findOne({ where: { email } });

        if (!company) return res.status(404).json({ message: 'No company found' });

    // vericifa a senha
        const isPasswordValid = await comparePassword(password, company.password);

        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    // gerar o tokem
        const token = generateToken({ id: company.id, name: company.name }, process.env.JWT_SECRET, '2h');

        return res.status(200).json({ message: 'Login successfully', token });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
