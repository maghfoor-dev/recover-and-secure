export type AmaanatUserType = {
    ID: number;
    AIMSNo: string;
    Jamaat: string;
    Name: string;
    PhoneNo: string;
    itemsData: {
        storedNumber: number;
        returnedNumber: number;
    }
}

export type AmaanatUserItemType = {
    ID: number;
    UserID: number;
    ItemName: string;
    ItemDetails: string;
    StoredLocation: string;
    EntryDate: string;
    Returned: 0 | 1;
    ReturnedBy: string | null;
    ReturnedDate: string | null;
}

export type AmaanatSelectedRowsDataType = {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: AmaanatUserItemType[]
}