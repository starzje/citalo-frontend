import { useCallback, useMemo, FC } from 'react';
import { ArticleProps } from '@/types';
import { filterPostsInput } from '@/lib/filterPosts';

const InputSearchBar: FC<ArticleProps> = ({
  posts,
  setSearchTerm,
  searchTerm,
}) => {
  /**
   * @function
   * @param {Array} posts - an array of post objects
   * @param {string} searchTerm - the search term entered by the user
   * @returns {Array} filteredPosts - an array of post objects that match the search term
   * This function uses the useMemo hook to create a new array of filtered posts.
   * The filteredPosts variable is dependent on the posts and searchTerm variables,
   * so if either of those change, the filteredPosts array will be recalculated.
   */
  const filteredPosts = useMemo(
    () => filterPostsInput(posts, searchTerm),
    [posts, searchTerm]
  );

  /**
   * @function
   * @param {React.ChangeEvent<HTMLInputElement>} e - the change event of the input element
   * This function uses the useCallback hook to create a new callback function
   * that updates the searchTerm state when the input value changes.
   * The function is dependent on the setSearchTerm variable,
   * so it will only be recreated if the setSearchTerm changes.
   */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm && setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  /**
   * @function
   * @param {React.KeyboardEvent<HTMLInputElement>} e - the keyboard event of the input element
   * This function handleKeyDown is called when the user presses the 'Enter' key on the input element
   * If the filteredPosts array has at least one element, the first post's title will be set as the new searchTerm.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredPosts.length > 0) {
        setSearchTerm && setSearchTerm(filteredPosts[0].attributes.title);
      }
    }
  };

  return (
    <div className="mx-auto  max-w-screen-md pb-10 leading-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-auto relative flex  flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0 md:w-1/2 w-full"
      >
        <input
          type="name"
          name="search"
          autoComplete="off"
          className="pl-3 w-full cursor-text rounded-md py-4 outline-double outline-2 outline-dark-brown ring-light-brown sm:border-0 focus:ring "
          placeholder="Pretraži:"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="left-0 top-14 absolute z-[999] w-full bg-light-brown divide-y rounded-b-xl shadow-lg sm:mr-32 ">
          {searchTerm !== '' &&
            filteredPosts.map((post) => {
              return (
                <div
                  key={post.id}
                  className={`cursor-pointer px-4 py-2 text-gray-600 hover:bg-dark-brown hover:text-white `}
                  onClick={() => {
                    setSearchTerm && setSearchTerm(post.attributes.title);
                  }}
                >
                  <span className="m-0 font-medium">
                    {post.attributes.title}
                  </span>
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default InputSearchBar;
