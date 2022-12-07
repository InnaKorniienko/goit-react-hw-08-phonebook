export const isDublicate = ({name, phone}, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase() || normalizedPhone === item.phone.toLowerCase())
    });
    return Boolean(result);
}