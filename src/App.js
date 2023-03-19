import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import { ParallelQueriesPage } from "./components/ParallelQueriesPage";
import { DynamicParallelQueries } from "./components/DynamicParallelQueries";
import { DependentQueries } from "./components/DependentQueries";
import { RQSuperHeroPage } from "./components/RQSuperHeroPage";
import { PaginatedQueriesPage } from "./components/PaginatedQueriesPage";
import { InfiniteQueriesPage } from "./components/InfiniteQueriesPage";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-paginated">Paginated Query</Link>
              </li>
              <li>
                <Link to="/rq-infinite">Infinite Query</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelQueries heroIds={[1, 3]} />}
            />
            <Route
              path="/rq-dependent"
              element={<DependentQueries email="johndoe@testmail.com" />}
            />
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
            <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
