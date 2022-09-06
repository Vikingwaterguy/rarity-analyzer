import * as React from "react";
import Image from "next/image";
import { OpenSeaIcon } from "../Icons";

const MarketPlaceLinks = ({ id }: { id: string }) => {
	return (
		<div className="flex items-center justify-star space-x-1 mt-3 mb-5">
			{process.env.NEXT_PUBLIC_COLLECTION_TOKEN && (
				<>
					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://minted.network/collections/cronos/0x219bd84e44be4d08289be20349d94f84b4185667/${id}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<OpenSeaIcon />
							</span>
							Minted
						</div>
					</a>
					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://app.ebisusbay.com/collection/scarecro-fright-society/${id}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image src="/Ebisus.png" width="20px" height="20px" />
							</span>
							Ebisus
						</div>
					</a>
					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://cronoscan.com/token/${process.env.NEXT_PUBLIC_COLLECTION_TOKEN}?a=${id}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image
									src="/cro.png"
									width="20px"
									height="20px"
								/>
							</span>
							cronoscan
						</div>
					</a>
				</>
			)}
		</div>
	);
};

export default MarketPlaceLinks;
