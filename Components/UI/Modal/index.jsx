import { forwardRef } from "react";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const ModalHarita = forwardRef(function MapModal(props, ref) {
  if (props.taxi) {
    const {
      taxi: { durakAd, durakTel, sehir, ilce, latitude, longitude },
    } = props;

    return (
      <div
        className="modal fade"
        id={props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={ref}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title d-flex text-bold justify-content-center align-items-center"
                id={props.id}
              >
                {durakAd}&nbsp;-&nbsp;
                {durakTel}&nbsp;-&nbsp;
                {ilce}&nbsp;-&nbsp;
                {sehir}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div style={{ width: "100%", height: "400px" }}>
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
                  <Map
                    defaultZoom={17}
                    fullscreenControl="enabled"
                    rotateControl="enabled"
                    gestureHandling={"cooperative"}
                    center={{ lat: latitude, lng: longitude }}
                  >
                    <Marker position={{ lat: latitude, lng: longitude }} />
                  </Map>
                </APIProvider>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
});

export default ModalHarita;
