"use client";
import Districts from "../Districts/Disticts";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
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
  return (
    <div className="container my-3">
      <div className="row mb-3">
        <div className="col-12 col-lg-8 d-flex justify-content-center justify-content-lg-between  align-items-center">
          <BreadCrumb arr={breadCrumbArr} />
        </div>
        <div className="col-12 col-lg-4 d-inline-flex  flex-wrap gap-2 justify-content-center justify-content-lg-end align-items-center">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <EmailShareButton url={window.location.href}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <PinterestShareButton url={window.location.href}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
          <TelegramShareButton url={window.location.href}>
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
