export function formateDate(isoString: string): string {
    if (!isoString) return "Fecha no válida"; // Maneja valores nulos o vacíos
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return "Fecha no válida"; // Verifica si la fecha es inválida
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formatter.format(date);
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}