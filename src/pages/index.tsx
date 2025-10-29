"use client";

import { Button } from "@/components/ui/Button";

export default function Home() {
  return (

    <main className="bg-gray-600 flex flex-col items-center justify-center min-h-screen p-4">
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
