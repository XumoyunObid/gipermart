import { Dialog } from "@headlessui/react";
import useGetCategories from "../../pages/Home/Service/Query/UseGetCategories";
import CategoryCard from "../../pages/Home/Categories/Components/CategoryCard";
import { useNavigate } from "react-router-dom";

export function MyDialog({ isOpen, setIsOpen }) {
  const { data, isLoading } = useGetCategories();
  const navigate = useNavigate();

  const handleOpenCategory = (datakey) => {
    navigate(`/category/${datakey}`);
    setIsOpen(!isOpen);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-s[1087px] rounded bg-white py-[52px] px-[58px] grid grid-cols-3 gap-5 grid-rows-2">
          {data?.map((item) => (
            <button
              key={item.id}
              onClick={() => handleOpenCategory(item.datakey)}
            >
              <CategoryCard {...item} />
            </button>
          ))}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
