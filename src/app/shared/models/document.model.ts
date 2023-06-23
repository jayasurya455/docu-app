export interface DocumentType {
    typeId: string;
    name: string;
}

export interface Document {
    documentType: DocumentType;
    name: string;
}