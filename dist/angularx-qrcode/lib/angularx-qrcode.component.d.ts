import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { QRCodeErrorCorrectionLevel, QRCodeVersion, QRCodeElementType } from './types';
export declare class QRCodeComponent implements OnChanges {
    private renderer;
    private readonly platformId;
    colordark: string;
    colorlight: string;
    level: string;
    hidetitle: boolean;
    size: number;
    usesvg: boolean;
    allowEmptyString: boolean;
    qrdata: string;
    colorDark: string;
    colorLight: string;
    cssClass: string;
    elementType: keyof typeof QRCodeElementType;
    errorCorrectionLevel: keyof typeof QRCodeErrorCorrectionLevel;
    margin: number;
    scale: number;
    version: QRCodeVersion;
    width: number;
    qrcElement: ElementRef;
    qrcode: any;
    constructor(renderer: Renderer2, platformId: any);
    ngOnChanges(): void;
    protected isValidQrCodeText(data: string | null): boolean;
    private toDataURL;
    private toCanvas;
    private toSVG;
    private renderElement;
    private createQRCode;
}
