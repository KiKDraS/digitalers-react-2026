import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button/Button";
import { decrement, increment, incrementAsync, STATUS } from "../counter/slice";

export const Counter = () => {
  const counterState = useSelector((store) => store.counter);
  const { value, status } = counterState;
  const isLoading = status === STATUS.LOADING;
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-2 my-3 p-4">
        <div className="w-50 d-flex align-items-center gap-2">
          <span className="fs-4 me-3">Contador: {value}</span>
          <span
            className={`badge text-dark ${isLoading ? "bg-warning" : "bg-info"}`}
          >
            {status}
          </span>
        </div>
        <div className="w-50 d-flex align-items-center gap-2">
          <Button
            color="success"
            onClick={() => dispatch(increment())}
            text="+1"
          />
          <Button
            color="secondary"
            onClick={() => dispatch(decrement(1))}
            text="-1"
          />
        </div>
      </div>
      <div className="mt-3 p-4">
        <Button
          color="primary"
          text="Añadir asíncrono (+1)"
          onClick={() => dispatch(incrementAsync(1))}
          disabled={isLoading}
        />
      </div>
    </>
  );
};
