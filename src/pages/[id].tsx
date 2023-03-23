import {useRouter} from "next/router";
import CoreTemplate from "~/components/coreTemplate";
import {api} from "~/utils/api";

export default function PokemonDetails() {
  const router = useRouter();
  const {id} = router.query;

  // console.log(id);

  const {data, isLoading, isError, error} = api.pokemon.getOne.useQuery({id: id as string});

  const renderContent = () => {
    if (isError) {
      return (
        <>
          <h2>Something went wrong</h2>
          <p>{error?.message}</p>
        </>
      );
    }

    if (isLoading) {
      return (
        <h2>Loading...</h2>
      );
    }

    return (
      <div className="flex flex-row justify-center my-10">
        <img src={data?.image} alt={data?.name} width={250}/>
        <div className="prose mt-10">
          <h1>
            {data?.name}
          </h1>
          <div className="flex flex-col">
            <div>
              <b>Category:</b> <span>{data?.category.name}</span>
            </div>
            <div>
              <b>Height:</b> <span>{data?.height}</span>
            </div>
            <div>
              <b>Weight:</b> <span>{data?.weight}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <CoreTemplate title="Details Page">
      <button className="btn btn-accent mt-5" onClick={e => {
        e.preventDefault();
        router.back();
      }}>
        Back
      </button>
      {renderContent()}
    </CoreTemplate>
  );
}