export const STATUS = {
  IDLE: "idle", // Ocioso - No hay promesa en proceso
  PENDING: "pending", // Pendiente - Se está esperando la resolución de la promesa
  FULFILLED: "fulfilled", // Realizada - Se completo la promesa de forma exitosa
  REJECTED: "rejected", // Rechazada - Se completo la promesa con un error
} as const;
// as const -> Cada key del objeto STATUS tiene un dato idéntico al valor que almacena

export type StatusType = (typeof STATUS)[keyof typeof STATUS];
// StatusType tiene que ser una de las key del objeto as const STATUS

// enum STATUS {
//     IDLE = "idle",
//     PENDING = "pending",
//     FULFILLED = "fulfilled",
//     REJECTED = "rejected"
// }
