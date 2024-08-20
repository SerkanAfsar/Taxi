"use client";
import Districts from "../Districts/Disticts";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import { usePathname } from "next/navigation";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
export default function CityDetail({ breadCrumbArr, item, children }) {
  const pathName = usePathname();
  const fullPathName = `https://www.taksi-duraklari.com${pathName}`;
  return (
    <div className="container my-3">
      <div className="row mb-3">
        <div className="col-12 col-lg-8 d-flex justify-content-center justify-content-lg-between  align-items-center">
          <BreadCrumb arr={breadCrumbArr} />
        </div>
        <div className="col-12 col-lg-4 d-inline-flex  flex-wrap gap-2 justify-content-center justify-content-lg-end align-items-center">
          <FacebookShareButton url={fullPathName}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <EmailShareButton url={fullPathName}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <LinkedinShareButton url={fullPathName}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton url={fullPathName}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton url={fullPathName}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <PinterestShareButton url={fullPathName}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
          <TelegramShareButton url={fullPathName}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 mb-4 mb-xl-0">
          <Districts
            citySlug={item?.citySlug}
            cityName={item?.cityName}
            districtData={item?.districtData}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-10">{children}</div>
      </div>
    </div>
  );
}
