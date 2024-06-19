import "express-async-errors";
import express, { json }  from "express";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { employeeRouter } from "./routes/employee.routes";
import { HandleErrors } from "./middlewares/handleErrors.middlewares";
import swaggerDocs from "./swagger.json"
import { educationRouter } from "./routes/education.routes";
import { datesRouter } from "./routes/dates.routes";
import { contactRouter } from "./routes/contact.routes";
import { bankingRouter } from "./routes/banking.routes";
import { addressRouter } from "./routes/address.routes";

export const app = express();

app.use(helmet());

app.use(cors());

app.use(json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/v1/user", userRouter);

app.use("/v1/funcionario", employeeRouter);

app.use("/v1/education", educationRouter);

app.use("/v1/dates", datesRouter);

app.use("/v1/contact", contactRouter);

app.use("/v1/banking", bankingRouter);

app.use("/v1/address", addressRouter);
app.use(HandleErrors.execute);


