import { useEffect, useState } from "react";
import { Button } from "@/components/Buttons/ButtonVariants";

export default function Buttons() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="bg-background flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={() => setDark(!dark)}
        className="p-3 bg-brandWhite text-trueGray-800 rounded-lg absolute top-4 right-4"
      >
        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Button variant="primary" label="Enroll" />
        </div>
        <div>
          <Button
            variant="secondary"
            label="Add to Wishlist"
            iconSrc="/icons/heart.svg"
          />
        </div>
        <div>
          <Button
            variant="google"
            label="Sign up with Google"
            iconSrc="/icons/google.svg"
          />
        </div>
        <div>
          <Button
            variant="microsoft"
            label="Sign up with Microsoft"
            iconSrc="/icons/microsoft.svg"
          />
        </div>
        <div>
          <Button variant="instructor" label="Become an Instructor" />
        </div>
        <div>
          <Button variant="cart" label="Cart" cartBadge="1" />
        </div>
        <div>
          <Button variant="icon" iconSrc="/icons/arrow-right.svg" />
        </div>
      </div>
    </main>
  );
}
