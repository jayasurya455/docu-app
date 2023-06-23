import { Document, DocumentType } from "src/app/shared/models/document.model";

export const documentType : DocumentType[] = [
    {
        typeId: "1",
        name: "Financial"
    },
    {
        typeId: "2",
        name: "Technical"
    },
    {
        typeId: "3",
        name: "Marketing"
    },
    {
        typeId: "4",
        name: "Human Resources"
    }
];

export const allType : DocumentType = {typeId: "0",name: "All"};
export const apiUrl: string  = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails";

export const documents: Document[] = [
    {
        name: "Termincal Instructables",
        documentType: {
            typeId: "2",
            name: "Technical"
        },
    },
    {
        name: "Installation Guides",
        documentType: {
            typeId: "2",
            name: "Technical"
        },
    },
    {
        name: "Career Opportunities",
        documentType: {
            typeId: "1",
            name: "Financial"
        },
    },
    {
        name: "Customer Onboarding",
        documentType: {
            typeId: "1",
            name: "Financial"
        },
    },
    {
        name: "Training",
        documentType: {
            typeId: "2",
            name: "Technical"
        },
    },
    {
        name: "Printing Instructables",
        documentType:{
            typeId: "4",
            name: "Human Resources"
        },
    },
    {
        name: "Guidance",
        documentType: {
            typeId: "4",
            name: "Human Resources"
        },
    },
    {
        name: "Technical Support",
        documentType: {
            typeId: "3",
            name: "Marketing"
        },
    },
    {
        name: "Accounting Procedures",
        documentType: {
            typeId: "3",
            name: "Marketing"
        },
    },
    {
        name: "New Procedures",
        documentType: {
            typeId: "3",
            name: "Marketing"
        },
    }
]